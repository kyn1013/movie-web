import PropTypes from "prop-types";
import styles from "./Button.module.css"; //css코드를 자바스크립트 오브젝트로 변환,style를 모듈러로 만들 수 있다

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;