import classes from "src/components/FirstView/FirstView.module.css"

export function FirstView() {
  return (
    <div className={classes.wrap}>
      <img src="sea.jpg" alt="" max-width="100%" height="auto" loading='lazy' />
      <h1 className={classes.title}>あきログ</h1>
    </div>
  );
}
