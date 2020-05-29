import React from "react";
import { getImageUrl } from "../../shared/utils";
class Detail extends React.Component {
  render() {
    const { product, isStock } = this.props;
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
                      <li id="price-number">{product.price}đ</li>
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
                  <a href="#">Mua ngay</a>
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
                      name="comm_name"
                      required
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      name="comm_mail"
                      required
                      type="email"
                      className="form-control"
                      id="pwd"
                    />
                  </div>
                  <div className="form-group">
                    <label>Nội dung:</label>
                    <textarea
                      name="comm_details"
                      required
                      rows={8}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" name="sbm" className="btn btn-primary">
                    Gửi
                  </button>
                </form>
              </div>
            </div>
            {/*	End Comment	*/}
            {/*	Comments List	*/}
            <div id="comments-list" className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="comment-item">
                  <ul>
                    <li>
                      <b>Nguyễn Văn A</b>
                    </li>
                    <li>2018-01-03 20:40:10</li>
                    <li>
                      <p>
                        Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác
                        không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê.
                        Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm
                        tốt mà mọi người có thể cân nhắc.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="comment-item">
                  <ul>
                    <li>
                      <b>Nguyễn Văn A</b>
                    </li>
                    <li>2018-01-03 20:40:10</li>
                    <li>
                      <p>
                        Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác
                        không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê.
                        Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm
                        tốt mà mọi người có thể cân nhắc.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="comment-item">
                  <ul>
                    <li>
                      <b>Nguyễn Văn A</b>
                    </li>
                    <li>2018-01-03 20:40:10</li>
                    <li>
                      <p>
                        Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác
                        không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê.
                        Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm
                        tốt mà mọi người có thể cân nhắc.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="comment-item">
                  <ul>
                    <li>
                      <b>Nguyễn Văn A</b>
                    </li>
                    <li>2018-01-03 20:40:10</li>
                    <li>
                      <p>
                        Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác
                        không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê.
                        Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm
                        tốt mà mọi người có thể cân nhắc.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="comment-item">
                  <ul>
                    <li>
                      <b>Nguyễn Văn A</b>
                    </li>
                    <li>2018-01-03 20:40:10</li>
                    <li>
                      <p>
                        Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác
                        không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê.
                        Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm
                        tốt mà mọi người có thể cân nhắc.
                      </p>
                    </li>
                  </ul>
                </div>
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
      </>
    );
  }
}

export default Detail;
