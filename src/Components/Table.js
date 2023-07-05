import { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="container rounded" style={{ textAlign: "center" }}>
        <h2 style={{ color: "white" }} id="promise">
          {" "}
          PROMISSING STOCKS
        </h2>
        <table
          class="table-light table table-hover table-group-divider"
          style={{}}
        >
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">COMPANY</th>
              <th scope="col">RETURN %</th>
              <th scope="col">INDUSTRY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>TESLA</td>
              <td>40</td>
              <td>AUTO</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>SHOPIFY</td>
              <td>52</td>
              <td>ECOM</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>BLOCK</td>
              <td>56</td>
              <td>PAYMENT</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>ETSY</td>
              <td>48</td>
              <td>ECOM</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>MERCADOL</td>
              <td>63</td>
              <td>ECOM</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>NETFLIX</td>
              <td>18</td>
              <td>ENTERTAINMENT</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>AMAZON</td>
              <td>22</td>
              <td>ECOM N CLOUD</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
