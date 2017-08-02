import React from 'react'
import './main.css'
import axios from 'axios'

class App extends React.Component{
  handleChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      console.log(event)
      let data = {
        file:event.target.result
      }
      //数据挂到form上才能发送（文件）
      let formData = new FormData()
      formData.append('avatar',file)
      //这样，可以保证 multipart/form-data
      axios.post(`http://192.168.0.119:3000/avatar`,formData)
        .then(res=>console.log(res))
      //只有在这里，执行file相关操作，那么file里面才是有真正数据的（异步）硬盘时间与内存时间
    }
    reader.readAsDataURL(file)
    console.log('hello',file)
  }
  render(){
    return(
      <div className='App'>
        <input type='file' onChange={this.handleChange} className='file-upload-input' />
      </div>
    )
  }
}

export default App
