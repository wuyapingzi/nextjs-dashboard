"use client";

import dynamic from "next/dynamic";

// import 'fullpage.js/dist/fullpage.css'; // 导入fullPage.js的样式
const FullPageComponent = dynamic(
  () => import("./components/FullPageComponent"),
  {
    ssr: false, // 确保这个组件不会在服务器端渲染
  }
);

export default function Page() {
  return (
    <div className="home__page">
      <FullPageComponent />
    </div>
  );
}
