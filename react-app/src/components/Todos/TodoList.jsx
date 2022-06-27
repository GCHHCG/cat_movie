import React from 'react'
import { List } from 'antd';
import classNames from 'classnames'
const { Item } = List;
const TodoList = ({todos}) => {
    // const onDelect = () => {

    // }
    return (
        <div className="list-wrap">
            { todos[0] !== 1 &&
                // List组件来自antd  
                // 逻辑 配置数据源 
                // renderItem 每一个jsx输出
                <List 
                    itemLayout='horizontal'
                    dataSource={todos}
                    renderItem={({url,dec, price,text,pos}) => {
                        const className = classNames({
                            "list-item": true,
                        })
                        return (
                            <Item className= {className}>
                                <div className='event-list'>
                                    <span>
                                        <img src = {url}></img>
                                    </span>
                                    <span className='desc'>
                                        <p className='text'>{text}</p>
                                        <p className='detail'>{dec}</p>
                                        <p className='detail'>{pos}</p>
                                        <p className='price'> 
                                            <span  style={{background:'#fff2f1',color:'#fca48f'}}>售票中：</span>
                                            {price}
                                      </p>
                                    </span>
                                </div>
                            </Item>
                        )
                    }}
                />
            }
        </div>
    )
}

export default TodoList
