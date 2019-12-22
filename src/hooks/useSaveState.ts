import { useSelector } from 'react-redux';
import { RootState } from '../store/root';

function download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

export function useSaveState() {
    const state = useSelector((state: RootState) => state);
    return () => download('moj-everest.state-dump.json', JSON.stringify(state, null, 4));
}
