import "./widgetLg.css";
import Pic from '../../images/dashboardProfile.jpg'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={Pic}
              alt="Pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Carter</span>
          </td>
          <td className="widgetLgDate">11 Jul 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={Pic}
              alt="Pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Carter</span>
          </td>
          <td className="widgetLgDate">11 Jul 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={Pic}
              alt="Pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Carter</span>
          </td>
          <td className="widgetLgDate">11 Jul 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={Pic}
              alt="Pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Carter</span>
          </td>
          <td className="widgetLgDate">11 Jul 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}