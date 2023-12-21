import { getDownloadURL,  ref as storageRef, uploadBytes} from "firebase/storage";
import { storage,auth } from "../../config/firebase";
  
  export default function AddCloToFirebase({img}) {
    if (img === null) {
        console.error("Please select an image");
        return;
      }
    const imageRef = storageRef(storage, `${auth.name}`);

    uploadBytes(imageRef, img)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          saveData(url);
        })
        .catch((error) => {
            console.error(error.message);
        });
    })
    .catch((error) => {
        console.error(error.message);
    });
  }
  