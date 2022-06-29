import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector:'[isLessThanStartDate]',
    providers:[{provide:NG_VALIDATORS,useExisting:'EndDateValidatorDirective',multi:true}]
})
export class EndDateValidatorDirective implements Validator
{
    @Input('isLessThanStartDate') shouldbeless:any;
    validate(control : AbstractControl):{[key:string]:any} |null
    {
        console.log(this.shouldbeless);
        console.log(control.value);
        const sDate = new Date(this.shouldbeless);
        const eDate= new Date(control.value);
        return (sDate > eDate)?{'StartDateIsMOre':true}:null;
    }
}