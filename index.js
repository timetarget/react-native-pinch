'use strict';
import { NativeModules } from 'react-native';

const RNPinch = {
    fetch(url, obj) {
        return new Promise((resolve, reject) => {
            NativeModules.RNPinch.fetch(url, obj, (err, res) => {
                if (err) {
                    return reject(err);
                }

                res.url = url;
                res.text = () => res.bodyString;
                res.json = () => JSON.parse(res.bodyString);

                resolve(res);
            });
        });
    }
};

export default RNPinch;
