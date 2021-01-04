import { NumberFormatStyle } from "@angular/common";

export class Satellite {
    name: string = '';
    orbitType: string = '';
    type: string = '';
    operational: boolean = false;
    launchDate: string = '';

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(){
        let satType = this.type;
        if(satType.toLowerCase === 'space debris'){
            return true;
        }else{
        return false;
        }
    }
}
