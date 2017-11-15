<style>
    .about-container {
        text-align: center;
    }
    .github-box {
        position: relative;
        display: inline-block;
        background-color: #fff;
        height: 16rem;
        width: 30rem;
        border-top: 2px solid #d26911;
        padding: 2rem;
        box-sizing: border-box;
        text-align: left;
    }
    .github-box  a {
        text-decoration: blink;
    }
    .github-link {
        font-size: 1.8rem;
        color: #4078c0;
    }
    .github-description {
        margin: 1rem 0;
    }
    .github-star {
        position: absolute;
        bottom: 2rem;
        text-align: center;
        right: 0;
        left: 0;
        font-size: 1.4rem;
    }
</style>

<template>
    <div class="about-container">
         <div class="github-box">
            <a href="https://github.com/ywzhaiqi">
                <span class="github-link">ywzhaiqi</span>
            </a>
            <span> / </span>
            <a href="https://github.com/ywzhaiqi/vue-zhihu-daily">
                <span class="github-link">vue-zhihu-daily</span>
            </a>
            <br>
            <p class="github-description">用vue写的知乎日报web app</p>
            <p>Referer Control 扩展设置：网址 *.zhimg.com，再选择 target host</p>
         </div>
    </div>
</template>

<script>
export default {

}
</script>
