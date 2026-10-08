// mailto: links hand off to the visitor's email app; everything else opens in a new tab

export function openLink(url: string) {
    if (url.startsWith('mailto:')) {
        window.location.href = url;
    }
    else {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

// The same behavior as attributes for an <a> tag
export function linkTargetProps(url: string) {
    return url.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' };
}
