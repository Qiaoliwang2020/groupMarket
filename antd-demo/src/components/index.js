import React, { Component } from 'react';
import reqwest from 'reqwest';
import { List, Avatar, Button, Skeleton } from 'antd';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class StoreList extends Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };
    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };
    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <div className="cursor-pointer" onClick={this.onLoadMore}>loading more</div>
                </div>
            ) : null;

        return (
            <div>
                <div className="tab mt-20 mb-8">
                    <Button className="tab-item shadow-md rounded-full bg-black  font-medium text-white mr-2">All</Button>
                    <Button className="tab-item shadow-md rounded-full font-medium text-gray-600 mr-2">Food</Button>
                    <Button className="tab-item shadow-md rounded-full font-medium text-gray-600 mr-2">Item</Button>
                </div>
                <List
                    loading={initLoading}
                    itemLayout="horizontal"
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={item => (
                        <List.Item
                            className={'max-w-2xl bg-white rounded-row-item shadow-md overflow-hidden mb-4'}
                            extra={
                                <img
                                    className="h-36 w-36 object-cover md:w-full"
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}