import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        // Vous pouvez ajouter ici votre logique pour vérifier les identifiants
        // Si les identifiants sont valides, vous pouvez renvoyer un objet (par exemple, un objet utilisateur)
        // Sinon, vous pouvez renvoyer null pour indiquer une erreur
        console.log('Checking credentials ???');
        const user = { id: 1, name: 'Admin' }

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    }
  }
})
