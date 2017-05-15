package co.edu.udea.iw.ejemplo;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import co.edu.udea.iw.Exception.MyException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import co.edu.udea.iw.bl.UsuarioBl;

@Path("usuario")
@Component 
public class UsuarioWS {
	@Autowired
	UsuarioBl usuariobl;
	
	@GET
	@Produces(MediaType.TEXT_HTML)
	
	public String autenticar(@QueryParam("Login")String login, @QueryParam("pws")String pws){
		
		String retorno = "";
		try{
			usuariobl.validar(login, pws);
			
		}catch(MyException e){
			return e.getMessage();
			
		}
		return "";
	}
	
}
