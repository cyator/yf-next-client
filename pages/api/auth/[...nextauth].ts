import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
	secret: process.env.SECRET,
	providers: [
		Auth0Provider({
			clientId: 'M8e8MHAFcVkJKmrCF9Wu2NPZI3LcCC6D',
			clientSecret:
				'DxEYtw90r4iUAEUVvWYCSGsawadLC_9brh38H31eVpm9j5LdUy82sDxSSH2b3dQv',
			issuer: 'https://dev-wggqq680.us.auth0.com',
			authorization: {
				params: {
					audience: 'http://localhost:5000',
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken;
			return session;
		},
	},
});
