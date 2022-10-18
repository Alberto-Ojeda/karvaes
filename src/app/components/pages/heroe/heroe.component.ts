import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Joi from '@hapi/joi';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
 
})
export class HeroeComponent implements OnInit {

  id: number;

  //Joi
  private createValidatorFromSchema(schema): ValidatorFn {
    const validator: ValidatorFn = (group: FormGroup) => {
      // This is where the validation on the values of
      // the form group is run.
      const result = schema.validate(group.value);

      if (result.error) {
        const errorObj = result.error.details.reduce((acc, current) => {
          const key = current.path.join('.');
          acc[key] = current.message;
          return acc;
        }, {})

        // Set error value on each control
        for (const key in errorObj) {
          const control = group.get(key);
          if (control) {
            control.setErrors({ [key]: errorObj[key] });
          }
        }

        // Return the error object so that we can access
        // the form’s errors via `form.errors`. 
        return errorObj;
      } else {
        return null;
      }
    };

    return validator;
  }

  title = 'joi-validation';
  types = ['Lethal', 'Major', 'Minor'];

  incidentSchema = Joi.object({
    type: Joi.any().valid('Lethal', 'Major', 'Minor'),
    title: Joi.string().required().min(5).max(32),
    description: Joi.string().required().min(20),
    siteId: Joi.string().pattern(/^[a-zA-Z]{2}[0-9]{1,3}$/)
  });
  incidentForm:FormGroup;
  
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
    })

    this.incidentForm = this.fb.group({
      type: [this.types[2]],
      title: [''],
      description: [''],
      siteId: ['']
    }, {
      // Adding a validator to the whole form.
      validators: this.createValidatorFromSchema(this.incidentSchema)
    });
    this.incidentForm.valueChanges.subscribe((values) => {
      let result = this.incidentSchema.validate(values);
      console.log('Errors: ', result.error);
    })
  }

  ngOnInit(): void {
  }

  getError(formControlName: string): string {
    if (
      !this.incidentForm.get(formControlName).pristine &&
      this.incidentForm.errors
    ) {
        return this.incidentForm.errors[formControlName];
    }
    return;
  }


}
