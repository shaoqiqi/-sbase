import {delay,put,takeEvery,all} from 'redux-saga/effects';
function* helloSage(){

  
    console.log("saga")
}
function* incrementAsync(){
    console.log(5555555555)
    yield delay(5000)
  
    yield put({
              type:'add'
    })
  
}
function* watchIncrementAsync(){
  
    yield takeEvery('sub', incrementAsync)
  
}

export default  function* rootSage(){
    yield all([helloSage(),watchIncrementAsync()])

};