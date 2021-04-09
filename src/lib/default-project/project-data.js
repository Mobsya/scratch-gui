import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        translator(messages.variable),
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [
                    {
                        assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                        name: translator(messages.pop),
                        dataFormat: 'wav',
                        format: '',
                        rate: 11025,
                        sampleCount: 258,
                        md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
                    }
                ],
                volume: 100
            },
            {
                isStage: false,
                name: translator(messages.sprite, {index: 1}),
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '59e5095552f38004cc5aebd891c38671',
                        name: 'Thymio side',
                        bitmapResolution: 1,
                        md5ext: '59e5095552f38004cc5aebd891c38671.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 33,
                        rotationCenterY: 52
                    },
                    {
                        assetId: '96e373703be9839f2232a7cf74b25d69',
                        name: 'Thymio top',
                        bitmapResolution: 1,
                        md5ext: '96e373703be9839f2232a7cf74b25d69.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 26,
                        rotationCenterY: 54
                    }
                ],
                sounds: [
                    {
                        assetId: 'f2f0ca3696548ef1879481fc3433519e',
                        name: 'Thymio Wake Up',
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 32731,
                        md5ext: 'f2f0ca3696548ef1879481fc3433519e.wav'
                    },
					{
                        assetId: '68823e2db838f15e8ddd603a301ce579',
                        name: 'Thymio button',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 33021,
                        md5ext: '68823e2db838f15e8ddd603a301ce579.wav'
                    },
					{
                        assetId: '690113526a1b05fb3632340d1bd9eeda',
                        name: 'Thymio button 2',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 31975,
                        md5ext: '690113526a1b05fb3632340d1bd9eeda.wav'
                    },
					{
                        assetId: '78905cbe16087fa14816e2c9b336b3ec',
                        name: 'Thymio power off',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 50672,
                        md5ext: '78905cbe16087fa14816e2c9b336b3ec.wav'
                    },
					{
                        assetId: '70bfb1e5f5c7315ceb39d9ef943e7fd8',
                        name: 'Thymio 4',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 30505,
                        md5ext: '70bfb1e5f5c7315ceb39d9ef943e7fd8.wav'
                    },
					{
                        assetId: 'bf07e8810073f9addd7f519f04fad1f3',
                        name: 'Thymio 5',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 17634,
                        md5ext: 'bf07e8810073f9addd7f519f04fad1f3.wav'
                    },
					{
                        assetId: 'd49c7c6603a543ec0570a4c73f0b384e',
                        name: 'Thymio 6',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 26975,
                        md5ext: 'd49c7c6603a543ec0570a4c73f0b384e.wav'
                    },
					{
                        assetId: 'ae2f6756c19008f0d108970de51e6591',
                        name: 'Thymio 7',
                        dataFormat: 'wav',
                        format: '',
                        rate: 48000,
                        sampleCount: 35640,
                        md5ext: 'ae2f6756c19008f0d108970de51e6591.wav'
                    }
                ],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};


export default projectData;
