import React from "react";
import { getImageUrl, formatPrice } from "../../shared/utils";
import { Notification } from "react-pnotify";

class Detail extends React.Component {
  render() {
    const {
      product,
      isStock,
      comments,
      inputs,
      onChangeInput,
      onSubmitForm,
      onClickAddToCart,
      notifications,
    } = this.props;
    return (
      <>
        <div>
          <div id="product">
            <div id="product-head" className="row">
              <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                <img src={product && getImageUrl(product.image)} />
              </div>
              <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                <h1>{product && product.name}</h1>
                <ul>
                  <li>
                    <span>Bảo hành:</span> 12 Tháng
                  </li>
                  {product && product.accessories && (
                    <li>
                      <span>Đi kèm:</span> {product.accessories}
                    </li>
                  )}
                  {product && product.status && (
                    <li>
                      <span>Tình trạng:</span> {product.status}
                    </li>
                  )}
                  {product && product.promotion && (
                    <li>
                      <span>Khuyến Mại:</span> {product.promotion}
                    </li>
                  )}
                  {product && product.price && (
                    <>
                      <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                      <li id="price-number">{formatPrice(product.price)}</li>
                    </>
                  )}
                  <li
                    id="status"
                    style={{
                      color: product && product.is_stock ? "green" : "red",
                    }}
                  >
                    {isStock}
                  </li>
                </ul>
                <div id="add-cart">
                  {(product?.is_stock && (
                    <a href="#" onClick={(e) => onClickAddToCart(e, product)}>
                      Mua ngay
                    </a>
                  )) ||
                    null}
                </div>
              </div>
            </div>
            <div id="product-body" className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3>{product && product.name}</h3>
                {product && product.details}
              </div>
            </div>
            {/*	Comment	*/}
            <div id="comment" className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3>Bình luận sản phẩm</h3>
                <form method="post">
                  <div className="form-group">
                    <label>Tên:</label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="form-control"
                      value={inputs.name}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="form-control"
                      id="pwd"
                      value={inputs.email}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nội dung:</label>
                    <textarea
                      name="content"
                      required
                      rows={8}
                      className="form-control"
                      onChange={onChangeInput}
                      value={inputs.content}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    onClick={onSubmitForm}
                    name="sbm"
                    className="btn btn-primary"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
            {/*	End Comment	*/}
            {/*	Comments List	*/}
            <div id="comments-list" className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {comments &&
                  comments.length &&
                  comments.map((comment) => (
                    <div className="comment-item">
                      <ul>
                        <li>
                          <b>{comment.name}</b>
                        </li>
                        <li>{comment.data}</li>
                        <li>
                          <p>{comment.content}</p>
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
            {/*	End Comments List	*/}
          </div>
          <div id="pagination">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Trang trước
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Trang sau
                </a>
              </li>
            </ul>
          </div>
        </div>
        {(notifications && <Notification {...notifications} />) || null}
      </>
    );
  }
}

export default Detail;
