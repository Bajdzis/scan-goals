import React, { useState } from 'react';
import { Block, Element } from 'react-simple-bem';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/root';
import { deleteToastr } from '../../store/actions/toastr/action';
import './Toastr.scss';

export const Toastr: React.FC = () => {
    const [hideId, setHideId] = useState<number[]>([]);
    const [renderId, setRenderId] = useState<number[]>([]);
    const messages = useSelector((state: RootState) => state.toastr.messages);
    const dispatch = useDispatch();
    return (
        <Block bemName="toastr">
            {messages.map((message) => {
                if (renderId.indexOf(message.id) === -1) {
                    setTimeout(() => {
                        setRenderId((state) => [...state, message.id]);
                    }, 1);

                    setTimeout(() => {
                        setHideId((state) => [...state, message.id]);
                    }, message.time || 9000);
                }

                return (
                    <Element
                        key={message.id}
                        bemName="message"
                        bemMod={{
                            [message.type]: true,
                            show: renderId.indexOf(message.id) !== -1,
                            hide: hideId.indexOf(message.id) !== -1,
                        }}
                        onTransitionEnd={() => hideId.indexOf(message.id) !== -1 && dispatch(deleteToastr(message.id))}
                    >
                        {message.message}
                    </Element>
                );
            })}
        </Block>
    );
}
