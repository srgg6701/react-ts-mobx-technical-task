import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import appStore from '../../stores';
import * as style from '../style.css';

interface Employees {
  employeesList: Array<any>
}
@observer class Employees extends React.Component {

  @observable employeesList = [];

  componentDidMount():void {
    appStore.getData('http://dummy.restapiexample.com/api/v1/employees', 'employees').then(result => {
      const headers = [<div key={'header'} className='container'>
        {['Employee name', 'Employee salary', 'Employees age'].map(
          (param, index) => <div key={index}>{param}</div>)}
      </div>];
      const items = result.map((employeeData, index) => <div key={index}>
        <div key='name'>{employeeData.employee_name}</div>
        <div key='salary'>{employeeData.employee_salary}</div>
        <div key='age'>{employeeData.employee_age}</div>
      </div>
      );
      this.employeesList = [...headers, ...items];
    });
  }

  render() {
    return (<React.Fragment>
      <h4>Employees ({this.employeesList.length || '...loading...'})</h4>
      <section className={style.container}>
        {this.employeesList}
      </section>
    </React.Fragment>
    );
  }
}

export default Employees;
