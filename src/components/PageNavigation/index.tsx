import Link from "next/link";
import classes from "src/components/PageNavigation/PageNavigation.module.css"

export function PageNavigation() {
  return (
    <div className={classes.wrap}>
      <div className={classes.buttonWrap}>
        <Link className={classes.button} href="/">記事一覧</Link>
      </div>
    </div>
  );
}