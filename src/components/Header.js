import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default function Header(props) {

  const onSearch = value => {
   props.onSearchHandler(value);
  }

  return (
    <div className="header">
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </div>
  )
}
