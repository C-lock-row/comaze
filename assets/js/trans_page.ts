export const transPage = (url: string): void => {
    // 通常のページ遷移 
    if (!window.open(url, '_blank')) window.location.href = url
    // iPad用 
    else window.open(url, '_blank')
}