// creates URL for images in assets directory
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};