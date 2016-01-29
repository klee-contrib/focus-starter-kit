import user from 'focus-core/user';

export default () => {
    console.log('|--- [initializer] USER');

    user.setRoles(['DEFAULT_ROLE']);
}
