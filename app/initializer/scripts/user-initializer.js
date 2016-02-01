import user from 'focus-core/user';

export default () => {
    console.log('|--- USER');
    user.setRoles(['DEFAULT_ROLE']);
}
