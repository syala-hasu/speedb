import CryptoJS from 'crypto-js'

const randomPick = (str: string,length: number = 16): string => {
    let res = '';
    for (let i = 0; i < length; i++) {
        res += str.charAt(Math.floor(Math.random() * str.length));
    }
    return res;
}

const generateSalt = (length: number = 16): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return randomPick(characters, length)
};

export const hash = (str: string): string => {
    const encrypted = CryptoJS.HmacMD5(str, generateSalt() + import.meta.env.VITE_CRYPTO_PEPPER)
    return randomPick(encrypted.toString(), 8)
};