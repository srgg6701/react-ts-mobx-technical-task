import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import appStore from '../../stores';
import * as style from '../style.css';

interface People {
  peopleList: Array<any>
}

@observer class People extends React.Component {

  @observable peopleList = [];

  componentDidMount():void {
    appStore.getData('https://jsonplaceholder.cypress.io/users', 'people').then(result => {
      const headers = [<div key={'header'} className='container'>
        {['Person name', 'Person username', 'Person email'].map(
          (param, index) => <div key={index}>{param}</div>)}
      </div>];
      const items = result.map((personData, index) => <div key={index}>
        <div key='name'>{personData.name}</div>
        <div key='username'>{personData.username}</div>
        <div key='email'>{personData.email}</div>
      </div>
      );
      this.peopleList = [...headers, ...items];
    });
  }

  render() {
    return (<React.Fragment>
      <h4>People ({this.peopleList.length || '...loading...'})</h4>
      <section className={style.container}>
        {this.peopleList}
      </section>
    </React.Fragment>
    );
  }
}

export default People;
