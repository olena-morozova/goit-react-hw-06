import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectVisibleContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";
export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
