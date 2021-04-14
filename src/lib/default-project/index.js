import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import thymioWav0 from '!arraybuffer-loader!./f2f0ca3696548ef1879481fc3433519e.wav';
import thymioWav1 from '!arraybuffer-loader!./68823e2db838f15e8ddd603a301ce579.wav';
import thymioWav2 from '!arraybuffer-loader!./690113526a1b05fb3632340d1bd9eeda.wav';
import thymioWav3 from '!arraybuffer-loader!./78905cbe16087fa14816e2c9b336b3ec.wav';
import thymioWav4 from '!arraybuffer-loader!./70bfb1e5f5c7315ceb39d9ef943e7fd8.wav';
import thymioWav5 from '!arraybuffer-loader!./bf07e8810073f9addd7f519f04fad1f3.wav';
import thymioWav6 from '!arraybuffer-loader!./d49c7c6603a543ec0570a4c73f0b384e.wav';
import thymioWav7 from '!arraybuffer-loader!./ae2f6756c19008f0d108970de51e6591.wav';
import backdrop from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
import costume1 from '!raw-loader!./59e5095552f38004cc5aebd891c38671.svg';
import costume2 from '!raw-loader!./babf8fedfc6853ee77c933480b48185d.svg';
/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: 'f2f0ca3696548ef1879481fc3433519e',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav0)
    }, {
		id: '68823e2db838f15e8ddd603a301ce579',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav1)
    }, {
		id: '690113526a1b05fb3632340d1bd9eeda',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav2)
    }, {
		id: '78905cbe16087fa14816e2c9b336b3ec',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav3)
    }, {		
		id: '70bfb1e5f5c7315ceb39d9ef943e7fd8',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav4)
    }, {
		id: 'bf07e8810073f9addd7f519f04fad1f3',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav5)
    }, {
		id: 'd49c7c6603a543ec0570a4c73f0b384e',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav6)
    }, {
		id: 'ae2f6756c19008f0d108970de51e6591',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(thymioWav7)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: '59e5095552f38004cc5aebd891c38671',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume1)
    }, {
        id: 'babf8fedfc6853ee77c933480b48185d',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume2)
    }];
};

export default defaultProject;
