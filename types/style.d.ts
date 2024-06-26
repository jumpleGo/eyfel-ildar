declare module '*export.module.scss' {
    type Variables =
        | 'desktopMin'
        | 'tabletMin'
        | 'mobileS'
        | 'level1'
        | 'level2'
        | 'level3'
        | 'level4'

    const content: Record<Variables, string>;
    export default content;
}