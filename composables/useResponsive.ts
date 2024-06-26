import scssVariables     from '~/style/export/export.module.scss';
import { ref, computed } from '#imports';
import debounce          from 'lodash.debounce';
import {useEventListener} from "@vueuse/core";

export default () => {
    const isDesktop = ref(false);
    const isTablet  = ref(false);
    const isMobile  = ref(false);
    const isMobileS = ref(false);

    const clientWidthDetected = computed(() => isDesktop.value || isTablet.value || isMobile.value || isMobileS.value);

    const breakpoints = {
        desktopMin: parseFloat(scssVariables.desktopMin),
        tabletMin : parseFloat(scssVariables.tabletMin),
        mobileS   : parseFloat(scssVariables.mobileS),
    };

    const setResponsive = debounce(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth || 0;
        const clientWidth    = document.documentElement.clientWidth + scrollbarWidth;

        if (clientWidth >= breakpoints.desktopMin) {
            // Desktop
            isDesktop.value = true;
            isTablet.value  = false;
            isMobile.value  = false;
            isMobileS.value = false;
        } else if (clientWidth >= breakpoints.tabletMin) {
            // Tablet
            isDesktop.value = false;
            isTablet.value  = true;
            isMobile.value  = false;
            isMobileS.value = false;
        } else if (clientWidth >= breakpoints.mobileS) {
            // Mobile
            isDesktop.value = false;
            isTablet.value  = false;
            isMobile.value  = true;
            isMobileS.value = false;
        } else {
            // MobileS
            isDesktop.value = false;
            isTablet.value  = false;
            isMobile.value  = true;
            isMobileS.value = true;
        }
    }, 50);

    onMounted(() => {
        setResponsive();
        useEventListener(window, 'resize', setResponsive);
    });
    return { breakpoints, isDesktop, isTablet, isMobile, isMobileS, clientWidthDetected };
};
