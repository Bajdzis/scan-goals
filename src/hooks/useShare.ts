const shareMgs = {
    title: 'W tym roku dam rade!', 
    text: 'W tym roku realizuje swoje postanowienia z aplikacją "Mój Everest"!',
    url: 'https://play.google.com/store/apps/details?id=pl.scan.food.twa'
};

function canShare(): boolean {
    // @ts-ignore
    if (!navigator.share) {
        return false;
    }

    // @ts-ignore
    if (!navigator.canShare) {
        return false;
    }

    // @ts-ignore
    if (!navigator.canShare(shareMgs)) {
        return false;
    }

    return true;
}

type ShareFunction = () => void;

export function useShare(): ShareFunction | undefined {
    if (canShare()) {
        // @ts-ignore
        return () => navigator.share(shareMgs);
    }

    return;
}
