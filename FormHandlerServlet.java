package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the Contacting form.
    String textValue = request.getParameter("text-input");

    // Print the textValue so you can see it in the server logs.
    System.out.println("You submitted: " + textValue);

    // Write the value to the response so the user can see it.
    response.getWriter().println("You submitted: " + textValue);

    //Redirections
    if(request.getParameter("text-input").equals("Go To GitHub")){
        response.sendRedirect("https://github.com/Xyndro");
    }

    if(request.getParameter("text-input").equals("Go To LinkedIn")){
        response.sendRedirect("https://www.linkedin.com/in/joseph-feliciano-354941228/");
    }

  }
}
