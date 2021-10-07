export const fmYouTubeURLToCode = (URL: string) => {
    const youtubeCode: string[] = [];
    
    for (let word of URL.split("").reverse()) {
        if (word === "=") break;
        youtubeCode.unshift(word);
    }

    return youtubeCode.join("");
};
