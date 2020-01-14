import React from 'react';

import { StickyScroll } from '../../components/StickyScroll/StickyScroll';
import './ReadMePage.scss';
import { StickyItem } from '../../components/StickyItem/StickyItem';
import { TextReader } from '../../components/TextReader/TextReader';
import { TextPlayer } from '../../components/TextPlayer/TextPlayer';

interface ReadMePageProps {
    close(): void;
}

export const ReadMePage: React.FC<ReadMePageProps> = ({ close }: ReadMePageProps) => {

    return (
        <div style={
            {
                display: 'grid',
                height: '100%',
                gridTemplateRows: 'auto 1fr'
            }
        }>
            <div style={{ display: 'flex' }}>
                <h1 style={{ width: '100%' }} >Co daje nasza aplikacja?</h1>
                <TextPlayer />
            </div>
            <StickyScroll>
                <TextReader>
                    <p>
                        Głównym celem naszej aplikacji jest zaplanowanie celu oraz wyćwiczenie nawyku codziennej pracy nad sobą.
                        Dlatego też zachęcamy do używania naszej aplikacji codziennie rano przy śniadaniu lub kawie!
                        Na każdy dzień przygotowaliśmy jedną poradę nad którą powinieneś pracować w trakcie całego dnia.
                        Niektóre porady odblokowują ukryte funkcjonalności w aplikacji! Odblokuj je wszystkie!
                    </p>
                    <p>
                        Nasza aplikacja nie służy do kontrolowania postępów oraz planowania codziennych zadań. 
                        Aplikacja powstała dla osób które chcą poprawnie zaplanować realizację swoich celów.
                        Dzięki temu zwiększają one szanse na pokonanie przeciwności oraz lepiej poznają siebie.
                        Staraliśmy się przedstawić wiele technik i sposobów które pomogą zrealizować cele. 
                    </p>
                    <p>
                        Jeśli chciałbyś podzielić się swoimi postanowieniami lub
                        poprosić o dodatkowe porady zapraszamy Cię do naszej grupy na facebooku!
                    </p>
                </TextReader>
                <StickyItem bottom={0}>
                    <button type="button" onClick={close}>
                        Ok, wszystko rozumiem
                    </button>
                </StickyItem>
            </StickyScroll>

        </div>

    );
};

