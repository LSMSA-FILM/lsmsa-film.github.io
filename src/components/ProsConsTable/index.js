import clsx from "clsx";
import styles from "./styles.module.css";

function ProsConsTable({ data }) {
  return (
    <table class={clsx(styles.pros_cons_table)}>
      <thead>
        <th>
          <h3>Pros</h3>
        </th>
        <th>
          <h3>Cons</h3>
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              {data.pros.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {data.cons.map((item, index) => (
                <li>{item}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProsConsTable;
