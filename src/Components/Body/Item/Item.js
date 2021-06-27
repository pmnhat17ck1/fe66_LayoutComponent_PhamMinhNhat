import React, { Component } from 'react'

export default class item extends Component {

    DataCard = {img:'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg', title:'Card titile', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos asperiores nisi provident, velit voluptatum iste vel? Accusamus a'}
    renderCard = () => {
            return (
                <div className="col-3">
                  <div className="card text-center">
                    <img className="card-img-top" src={this.DataCard.img} alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{this.DataCard.title}</h4>
                        <p className="card-text">{this.DataCard.content}</p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary " href="#" role="button">Find Out More!</a>
                    </div>
                    </div>
                </div>
            )

    }



    render() {
        return (
            <div className="row">
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
            </div>
        )
    }
}
