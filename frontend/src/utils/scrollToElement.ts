export const scrollToElement = (elementId: string) => {
    const elem = document.getElementById(elementId);
    elem?.scrollIntoView({ behavior: 'smooth' });
};