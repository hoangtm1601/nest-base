export default (): Record<string, string> => ({
  jwtSecretKey: `nest-base-secret-key`,
  jwtExpiresIn: `600s`,
})
