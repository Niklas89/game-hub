//import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
  //if (!url) return noImage;
  if (!url) return "";
  
  const target = 'media/';
  // we want : media/crop/600/400/
  const index = url.indexOf(target) + target.length;
  // url.slice(0, index): from the beginning to the index, url.slice(index): from the index to the end
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;