import React, { Component } from 'react';
import { Cascader } from 'antd';
export default class Location extends Component {
    onChange=(value)=> {
        console.log(value);
    }

    // Just show the latest item.
     displayRender=(label)=>{
        return label[label.length - 1];
    }
    render() {
        const options = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];
        return <Cascader
            placeholder="Choose your location"
            options={options}
            expandTrigger="hover"
            displayRender={this.displayRender}
            onChange={this.onChange}
        />
    }
}