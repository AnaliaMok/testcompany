/**
 * File Containing Helper Methods
 */
import { Config } from "./config.js";

/**
 * Retrieves a media object
 * 
 * @param func callback 
 * @param int mediaId Media library id
 * @param string size if all, returns sizes object, otherwise returns specified size object
 * @return Object media object
 */
export function getMediaItem(callback, mediaId = 0, size = 'full'){
  if(mediaId === 0)
    return null;
  
  let otherMediaObj;
  fetch(`${Config.apiUrl}/wp-json/wp/v2/media?${mediaId}`)
    .then(res => res.json())
    .then(
      (data) => {
        let mediaObject;
        switch(size){
          case 'thumbnail':
            mediaObject = data[0].media_details.sizes.thumbnail;
            break;
          case 'medium':
            mediaObject = data[0].media_details.sizes.medium;
            break;
          case 'medium_large':
            mediaObject = data[0].media_details.sizes.medium_large;
            break;
          case 'project_thumbnail':
            mediaObject = data[0].media_details.sizes.project_thumbnail;
            break;
          default:
            mediaObject = data[0].media_details.sizes.full;
            break;
        }

        // Set Alt Text
        mediaObject.alt = data[0].alt_text;
        callback(mediaObject);
      },
      (err) => {
        console.error(err);
      }
    )
    .catch( (err) => {
      console.error(err);
    });

}; // End of getMediaItem

/**
 * Retrieves the slug portion of a given absolute url
 * @param {string} url absolute url
 */
export function getSlug(url) {
  const parts = url.split("/");
  return parts.length > 2 ? parts[parts.length - 2] : "";
}; // End of getSlug
