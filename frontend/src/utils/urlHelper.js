export const isValidUrl = (url) => {
    const urlPattern = new RegExp(
        '^(https?:\\/\\/)?' +
        '((([a-zA-Z0-9$_.+!*(),;?&=-])+\\.)+([a-zA-Z]{2,}))' +
        '(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?' +
        '(\\?[;&a-zA-Z0-9@:%_+.~#?&//=]*)?' +
        '(\\#[-a-zA-Z0-9_]*)?$'
    );

    return urlPattern.test(url);
};