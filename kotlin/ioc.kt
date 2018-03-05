//Typeclassless technique for Inversion of Control
// Syntax types that exclusively use extfuns to
// describe their dependencies without explicitly requiring them as parameters

// scopes

interface DaoOperationsSyntax {
    val dao: DaoDatabase

    fun User.queryUser() =
            dao.query("SELECT * from Users where userId = ${this.id}")

    fun Company.queryCompany() =
            dao.query("SELECT * from Companies where companyId = ${this.id}")
}

interface NetworkSyntax {
    val network: NetworkModule

    fun User.requestUser() =
            network.request(this.id)
}

// combination of network + dao
interface RequestSyntax: DaoOperationsSyntax, NetworkSyntax {
    fun User.fetchUser() =
            Try { queryUser() }.getOrElse { requestUser() }
}

//--- Test scope
@Test
fun testDataRepository {
    val user = testNetworkSyntax.getUser(User("123"))

    user shouldBe UserDto(id = "123")
}