<script setup>
import GroupButton from '../components/primitive/GroupButton.vue';
import HeadMain from '../components/primitive/Main/HeadMain.vue';
import QuizList from '../components/primitive/Main/QuizList.vue';
import slideFooter from '../components/primitive/slideFooter.vue';


</script>

<template>
    <section class="main">
        <GroupButton isActivate />
        <HeadMain isScrolled />
        <slideFooter typeStyle="white" routeCard="/empty" />
        <QuizList />
    </section>
</template>

