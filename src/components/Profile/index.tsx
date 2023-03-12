import classes from "src/components/Profile/Profile.module.css"

export function Profile() {
  return (
    <div className={classes.wrap}>
      {/* プロフィール */}
      <div className={classes.imgWrap}>
        <img src="usagi.jpeg" alt="" max-width="100%" height="auto" loading='lazy' />
      </div>
      <div className={classes.titleWrap}>
        <h2 className={classes.title}>しんじょう</h2>
      </div>
      <div className={classes.textWrap}>
        <p className={classes.text}>沖縄在住。美味しいもの巡りが趣味で沖縄そばに夢中。ダイエットに成功してはリバウンドを繰り返す。</p>
      </div>
    </div>
  );
}
