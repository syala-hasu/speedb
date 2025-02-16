import {Firestore} from "@google-cloud/firestore";

const firestoreClient = new Firestore()

export const getCollection = (collection: string) => {
    return firestoreClient.collection(collection)
}

