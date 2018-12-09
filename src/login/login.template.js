/*
{
    data: {
        title: 'login'
    }
}
*/
export default  data =>`
${data.title}
<form id="loginForm">
<label>Email</label>
<input type ="text" name="email" class="form-control">
<label>Password</label>
<input type ="password" name="password" class="form-control">
<button type="submit">Se connecter</button>
</form>
`
